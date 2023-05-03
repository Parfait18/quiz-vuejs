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
    expect(wrapper.text()).toContain('Quelle est la capitale de la France ?')
  })
})
