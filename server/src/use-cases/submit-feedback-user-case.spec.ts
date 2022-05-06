import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'complaining about a bug',
      screenshot: 'data:image/png;base64,asdnasbduasd'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  
  it('should not be able to submit a feedback without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'complaining about a bug',
      screenshot: 'data:image/png;base64,asdnasbduasd'
    })).rejects.toThrow()
  })

  
  it('should not be able to submit a feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,asdnasbduasd'
    })).rejects.toThrow()
  })

  
  it('should not be able to submit a feedback with a invalid image', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'complaining about a bug',
      screenshot: 'gatinho.png'
    })).rejects.toThrow()
  })
})