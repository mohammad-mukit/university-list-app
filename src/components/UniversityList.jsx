const UniversityList = ({ data }) => {

  return (
    <div className="university-list">
      <h2>University List!</h2>
      <div className="all-university">
        {data.map((varsity) => (
          <div className="varsity" key={varsity.domains}>
            <h4>{varsity.name}</h4>
            <h5>{varsity.country}</h5>
            <a href={varsity.web_pages} target="_blank">
              University Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityList;
