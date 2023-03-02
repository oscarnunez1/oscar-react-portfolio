import MailchimpSubscribe from "react-mailchimp-subscribe"

export const MailchimpForm = () => {

  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_URL}$id=${process.env.REACT_APP_MAILCHIMP_ID}`

  return (
    <>
      <MailchimpSubscribe 
        url={postUrl}
        render={({ subscrobe, status, message }) => (
          <></>
        )}
      />
    </>
  )
}