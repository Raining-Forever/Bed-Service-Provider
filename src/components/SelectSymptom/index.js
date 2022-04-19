// import Empty from "../../components/Symptom/Result/Empty"
import Green from "../../components/Symptom/Result/Green";
import Red from "../../components/Symptom/Result/Red";
import Yello from "../../components/Symptom/Result/Yellow";

export default function SelectSymptom(props) {
  function ProcessResult(total_score) {
    if (total_score < 0) {
      return 99;
    }
    if (total_score <= 10) {
      return 1; // green
    } else if (total_score < 20) {
      return 2; //yellow
    } else if (total_score > 20) {
      return 3; //red
    }
  }
  const selectComponent = ProcessResult(
    props.symptomScore
  );
  if (selectComponent === 1) {
    return <Green />;
  }
  if (selectComponent === 2) {
    return <Yello />;
  }
  if (selectComponent === 3) {
    return <Red />;
  } else return <>Error</>;
}
