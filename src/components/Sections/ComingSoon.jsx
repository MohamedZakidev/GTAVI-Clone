const ComingSoon = () => {
  return (
    <section className="entrance-message flex-center radial-gradient">
      <div className="col-center w-full gap-14">
        <img src="/images/logo.webp" alt="logo" className="w-[40%] max-w-60 object-contain" />

        <div>
          <h3 className="gradient-title">
            Coming <br />
            novermber 19 <br /> 2026
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
