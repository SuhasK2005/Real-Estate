const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Ready to Make a Move? Lets Build Your Future Together
      </p>

      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flep-wrap">
          <div className="w-full md:w-1/2 text-left">
            Name
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Your Name" required />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Email
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Your Email" required />
          </div>
        </div>
        <div className="my-6 text-left">
            Message
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-3 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
        </div>
        <button className="bg-blue-600 rounded px-10 py-3 mb-10 text-white">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
