import React from "react";
import PropTypes from "prop-types";
import { EnvisionPageTemplate } from "../../templates/envision-page";

const EnvisionPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <EnvisionPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        sectionTitle={data.sectionTitle}
        sectionDescription={data.sectionDescription}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

EnvisionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default EnvisionPagePreview;