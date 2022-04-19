import React, {
  useEffect,
  useState,
} from "react";
import styles from "../../Account/Account.module.css";
import AccountDetail from "../../../components/AccountDetail";
import { useAuthContext } from "../../../context/AuthContext";

export default function Patientregister() {
  const { auth } = useAuthContext();
  const [patient, setPatient] = useState({});
  useEffect(() => {
    if (auth.email) {
      setPatient({
        ...patient,
        email: auth.email,
      });
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ข้อมูลผู้ป่วย
          </div>
        </div>
        <div className={styles.box}>
          <AccountDetail patientinfo={patient} />
        </div>
      </div>
    </div>
  );
}
