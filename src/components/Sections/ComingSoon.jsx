const ComingSoon = () => {
  return (
    <section className="radial-gradient">
      <div className="col-center h-full gap-10">
        <img src="/images/logo.webp" alt="logo" className="entrance-logo" />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="w-20 md:w-32" />
          <img src="/images/x-logo.svg" className="w-40 md:w-52" />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
