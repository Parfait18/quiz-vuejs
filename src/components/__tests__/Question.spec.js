import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach } from 'vitest'
import { useQuestionStore } from '@/stores/questionStore'
import { useQuizStore } from '@/stores/quizStore'
import { useResultStore } from '@/stores/resultStore'

import Question from '../Question.vue'

//test if Question Component work  as expected
describe('Question', () => {
  const questionStore = useQuestionStore()
  const quizStore = useQuizStore()
  const resultStore = useResultStore()

  beforeEach(() => {
    setActivePinia(createPinia())
  })

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
    //test if component button to submit
    expect(wrapper.find('#submit').text()).toContain('Suivant')
    //try to click button
    await wrapper.find('#submit').trigger('click')
    //test if nextStep function is called only once
    expect(questionStore.updateAnswer(null)).toHaveBeenCalledTimes(1)
    expect(resultStore.updateScores(0)).toHaveBeenCalledTimes(1)
    expect(quizStore.updateStep()).toHaveBeenCalledTimes(1)
  })
})
