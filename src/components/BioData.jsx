/*
{
name: "laban",
email: "laban@gmail.com",
phone: "+8801486487",
skills: ["HTML", "CSS", "javaScript", "React"],
interests: ["Theology", "Reading", "Writing", "Football"]
}
*/

const BioData = (props) => {
  const { name, email, phone, skills, interests } = props;
  return (
    <div className="bioData">
      <div className="bioData">
        <h2>Bio-Data {name}</h2>
        <p>
          <strong>Email:</strong>
          {email}
        </p>
        {phone && (
          <p>
            <strong>Phone:</strong>
            {phone}
          </p>
        )}
      </div>
      <hr />
      <div className="skills">
        <h2>Skills:</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interests">
        <h2>Intereste:</h2>
        <ul>
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BioData;
