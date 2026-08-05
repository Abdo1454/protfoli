function Contact() {
  return (
    <section id="contact" className="container py-5">

      <div className="text-center mb-5">
        <span className="text-info fw-semibold text-uppercase">
          Contact
        </span>

        <h2 className="display-4 fw-bold text-white mt-2">
          Let's Connect.
        </h2>

        <p
          className="text-secondary mx-auto"
          style={{ maxWidth: "650px" }}
        >
          Ready to start your next project? Drop me a message and let's build
          something extraordinary together.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card bg-dark border border-secondary rounded-4 shadow p-4">

            <form
              action="https://formspree.io/f/mnqvayqv"
              method="POST"
            >

              <div className="mb-3">
                <label className="form-label text-light">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control bg-black text-light border-secondary"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">
                  Email Address
                </label>

                <input
                  type="email"
                  name="_replyto"
                  className="form-control bg-black text-light border-secondary"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-light">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  className="form-control bg-black text-light border-secondary"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-3 fw-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Contact;