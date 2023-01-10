const transporter = require('../config/');

const mailOptions = (from, to, subject, html) => {
  return {
    from,
    to,
    subject,
    html,
  };
};

exports.sendMessage = (req, res) => {
  if (JSON.stringify(req.body) === '{}')
    return res.status(403).send('Post body cannot be empty');

  const { email, subject, message } = req.body;

  if (
    !email ||
    email === '' ||
    !subject ||
    subject === '' ||
    !message ||
    message === ''
  )
    return res.status(403).send('All fields must be filled');

  const html = `<h3>From: ${email} </h3>
  <h3>Subject: ${subject}</h3>
  <h3>Message:</h3>
  <p>${message}</p>
    `;

  const mail = mailOptions(
    process.env.MAIL_USERNAME,
    process.env.MAIL_USERNAME,
    subject,
    html
  );

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        result: false,
        message: 'Something went wrong please try again sometime',
      });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        result: true,
        message:
          'Thank you for contacting us, we will get back to you as soon as possible',
      });
    }
  });
};
