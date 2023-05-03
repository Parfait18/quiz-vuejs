import { mount, shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi } from 'vitest'
import { useQuestionStore } from '@/stores/questionStore'
import { useQuizStore } from '@/stores/quizStore'
import { useResultStore } from '@/stores/resultStore'

import Question from '../Question.vue'

//test if Question Component work  as expected
describe('Question', () => {
  const wrapper = mount(Question, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn()
        })
      ]
    },
    props: {
      questionItem: {
        id: 1,
        question: 'Quelle est la capitale de la France ?',
        choices: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
        correctAnswer: 0
      }
    }
  })

  it('renders properly', () => {
    //test if question is displayed
    expect(wrapper.text()).toContain('Quelle est la capitale de la France ?')
    expect(wrapper.props().questionItem).toStrictEqual({
      id: 1,
      question: 'Quelle est la capitale de la France ?',
      choices: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
      correctAnswer: 0
    })
  })

  it('test action on question component', async () => {
    //create question store  for component
    const questionStore = useQuestionStore()
    const resultStore = useResultStore()
    const quizStore = useQuizStore()

    //To mock properties that are defined as getters or setters, spyOn(object, methodName, accessType)
    //To mock functions, use  spyOn(object, methodName)

    //mock updateAnswer of questionStore
    vi.spyOn(questionStore, 'updateAnswer')

    // //mock updateScores of resultStore
    vi.spyOn(resultStore, 'updateScores')

    // //mock updateStep of quizStore
    vi.spyOn(quizStore, 'updateStep')

    //mount Question component with props
    const cmp = shallowMount(Question, {
      props: {
        questionItem: {
          id: 1,
          question: 'Quelle est la capitale de la France ?',
          choices: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
          correctAnswer: 0
        }
      },
      choice: null
    })

    vi.spyOn(cmp.vm, 'nextStep')

    //test if button exist on cmp
    expect(cmp.find('button').exists()).toBe(true)

    //expect init value of choice is null
    expect(cmp.vm.choice).toBeNull()

    //test if cmp button to submit
    expect(cmp.find('#submit').text()).toContain('Suivant')

    //try to click button when none choice is checked
    await cmp.find('#submit').trigger('click')

    //test if nextStep function is not called because no answer checked
    const nextStep = vi.spyOn(wrapper.vm, 'nextStep')
    expect(nextStep).toHaveBeenCalledTimes(0)

    //check choice value
    // await cmp.setValue({ choice: 2 })
    // await cmp.find('#submit').trigger('click')

    //check if value is update
    // expect(cmp.vm.choice).toEqual(2)

    //test if nextStep function is not called because no answer checked
    // expect(nextStep).toHaveBeenCalledTimes(1)

    // //test if update answer is call one time
    // expect(questionStore.updateAnswer(1)).toHaveBeenCalledTimes(0)

    // //test if answer is updated
    // expect(questionStore.getAnswer).toBe(1)

    // //test if update updateScore is call one time
    // expect(resultStore.updateScores(0)).toHaveBeenCalledTimes(0)

    // //test if update updateSetep is call one time
    // expect(quizStore.updateStep()).toHaveBeenCalledTimes(0)
  })
})
