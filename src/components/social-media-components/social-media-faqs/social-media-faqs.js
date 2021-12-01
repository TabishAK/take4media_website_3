import "./social-media-faqs.scss";
const SocialMediaFaqs = () => {
  return (
    <div className="creative-faqs">
      <div className="container">
        <Heading
          heading="FAQ's"
          subHeading="Check out some of the question people asked."
        />

        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
            {comment.map((c) => (
              <div className="comment">
                <div className="number">{c.number}</div>
                <div className="text">
                  <span className="question">Hows Work This antivirus?</span>

                  <Collapse isOpened={c.isOpened}>
                    <span className="answer">{c.comment}</span>
                  </Collapse>
                </div>

                {c.isOpened ? (
                  <AiFillCaretUp onClick={() => handleCollapse(c)} />
                ) : (
                  <AiFillCaretDown onClick={() => handleCollapse(c)} />
                )}
              </div>
            ))}
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 pic-side">
            <img className="img-side-faq" src={getHelp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFaqs;
