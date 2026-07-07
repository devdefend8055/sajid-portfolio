const transporter = require("../config/mailConfig");

exports.sendContactForm = async (req, res) => {
    try {
        const { firstName, lastName, email, mobileNumber, nameofOrg, message } = req.body;

        if (!firstName || !lastName || !email || !mobileNumber) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const mailOptions = {
            from: `"Work Together Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: "📩 New Work Together Form Submission",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background-color: #fafafa;">
            <h2 style="color: #333; text-align: center; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
                New Enquiry Received
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tbody>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd; background-color: #f9f9f9;">First Name</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${firstName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd; background-color: #f9f9f9;">Last Name</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${lastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd; background-color: #f9f9f9;">Email</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd; background-color: #f9f9f9;">Mobile Number</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${mobileNumber}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd; background-color: #f9f9f9;">Organization</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${nameofOrg}</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #fff; border: 1px solid #ddd; border-radius: 4px;">
                <h3 style="margin-top: 0; color: #4CAF50;">Message</h3>
                <p style="white-space: pre-wrap; color: #555;">${message}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #888; text-align: center;">
                This email was automatically generated from your Work Together form.
            </p>
        </div>
    `
        };


        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Form submitted successfully!" });

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Something went wrong, please try again later." });
    }
};
