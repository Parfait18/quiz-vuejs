import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach } from 'vitest'
import { useQuizStore } from '@/stores/quizStore'
import { useQuestionStore } from '@/stores/questionStore'
import { useResultStore } from '@/stores/resultStore'

import { mount } from '@vue/test-utils'
import Question from '../Question.vue'

//test if Question Component display good information
describe('Question', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const wrapper = mount(Question, {
      props: {
        questionItem: {
          id: 1,
          question: 'Quelle est la capitale de la France ?',
          choices: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
          correctAnswer: 0
        }
      }
    })

    //test if question is displayed
    expect(wrapper.text()).toContain('Quelle est la capitale de la France ?')
    expect(wrapper.props().questionItem).toStrictEqual({
      id: 1,
      question: 'Quelle est la capitale de la France ?',
      choices: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
      correctAnswer: 0
    })
  })

  //test if all question ils loaded in quizStore
  it('test is all question is loaded from file', () => {
    const quizStore = useQuizStore()

    //test if question lenght in file correspond to store qustion
    expect(quizStore.getQuestions.length).toBe(5)

    const wrapper = mount(Quiz, {})
    //test if quiz component contain question  component
    expect(wrapper.findComponent('Question'))
  })
})
