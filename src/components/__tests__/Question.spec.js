import { mount, shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi } from 'vitest'
import { useQuestionStore } from '@/stores/questionStore'
import { useQuizStore } from '@/stores/quizStore'
import { useResultStore } from '@/stores/resultStore'

import Question from '../Question.vue'

//test if Question Component work  as expected
describe('Question', () => {
  const wrapper = shallowMount(Question, {
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
    // vi.spyOn(resultStore, 'updateScores')

    // //mock updateStep of quizStore
    // vi.spyOn(quizStore, 'updateStep')

    //mount Question component
    const component = shallowMount(Question, {
      props: {
        questionItem: {
          id: 1,
          question: 'Quelle est la capitale de la France ?',
          choices: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
          correctAnswer: 0
        }
      }
    })

    //test if button exit on component
    expect(component.find('button').exists()).toBe(true)

    //test if component button to submit
    expect(component.find('#submit').text()).toContain('Suivant')

    //try to click button
    await component.find('#submit').trigger('click')

    //test if nextStep function is called only once
    expect(component.vm.nextStep()).toHaveBeenCalledTimes(1)

    // //test if update answer is call one time
    // expect(questionStore.updateAnswer(1)).toHaveBeenCalledTimes(1)

    // //test if answer is updated
    // expect(questionStore.getAnswer).toBe(1)

    // //test if update updateScore is call one time
    // expect(resultStore.updateScores(0)).toHaveBeenCalledTimes(1)

    // //test if update updateSetep is call one time
    // expect(quizStore.updateStep()).toHaveBeenCalledTimes(1)
  })
})
