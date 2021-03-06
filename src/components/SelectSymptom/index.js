// import Empty from "../../components/Symptom/Result/Empty"
import Green from "../../components/Symptom/Result/Green";
import Red from "../../components/Symptom/Result/Red";
import Yello from "../../components/Symptom/Result/Yellow";

export default function SelectSymptom(props) {
  function ProcessResult(total_score) {
    if (total_score < 0) {
      return 99;
    }
    if (total_score <= 20) {
      return 1; // green
    } else if (total_score < 30) {
      return 2; //yellow
    } else if (total_score > 30) {
      return 3; //red
    }
  }
  const selectComponent = ProcessResult(
    props.symptomScore
  );
  if (selectComponent === 1) {
    return <Green onsuggest={props.onsuggest} />;
  }
  if (selectComponent === 2) {
    return <Yello onsuggest={props.onsuggest} />;
  }
  if (selectComponent === 3) {
    return <Red onsuggest={props.onsuggest} />;
  } else return <>Error</>;
}
