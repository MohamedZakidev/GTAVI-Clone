function ComingSoon() {
  return (
    <section className="entrance-message">
      <div className="col-center h-full gap-10">
        <img src="/images/logo.webp" alt="logo" className="entrance-logo" />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br />
            Soon
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" alt="ps" className="w-20 md:w-32" />
          <img src="/images/x-logo.svg" alt="ps" className="w-20 md:w-32" />
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
