import React from "react";
import styles from "../Accessdeined.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function AnotherContact() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ติดต่อหน่วยงานอื่น
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxcontainer}>
            <div className={styles.title}>
              เบอร์ติดต่อหน่วยงานที่สามารถช่วยเหลือให้คำปรึกษาในช่วงสถานการณ์การแพร่ระบาดของเชื้อไวรัสโควิด-19
            </div>
            <div className={styles.description}>
              <div className={styles.item}>
                <img
                  className={styles.imgicon}
                  src="http://ddc.moph.go.th/img/logo_web.png"
                />
                สายด่วนกรมควบคุมโรค{" "}
                <div className={styles.phonenum}>
                  1422
                </div>
              </div>
              <div className={styles.item}>
                <img
                  className={styles.imgicon}
                  src="https://www.niems.go.th/1/Upload/migrate/File/255703190929449255_X3jNkgBJGI4OgBx7.png"
                />
                สถาบันการแพทย์ฉุกเฉินแห่งชาติ
                <div className={styles.phonenum}>
                  1669
                </div>
              </div>
              <div className={styles.item}>
                <img
                  className={styles.imgicon}
                  src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t31.18172-8/1026275_598040453586439_1238170390_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG6BQ1nKAtJp6dG8NRDEkQBZMjChcqR8LtkyMKFypHwuy3cb3XqyG9SZ7LeYqomns3xYIGgKIgGxbcki9VhtiA7&_nc_ohc=1JE9DIdllAQAX-1Pnk-&_nc_oc=AQkAuN4_cNPPtxOJ86UCTalvacRHSFhACoVbuK8l8PdY7nJljygeVBNr3RrtCd4UzRE&_nc_ht=scontent.fbkk6-2.fna&oh=00_AT-Yh49qSdohK8y3uv365OAlqBs9pd5hYvzP5LJuSZ-toQ&oe=6292777E"
                />
                ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน
                <div className={styles.phonenum}>
                  1111
                </div>
              </div>
              <div className={styles.item}>
                <img
                  className={styles.imgicon}
                  src="https://www.bumrungrad.com/images/custom/mobile/bi-logo-mobile.png"
                />
                สายด่วนปรึกษาแพทย์โรงพยาบาลบำรุงราษฎร์
                <div className={styles.phonenum}>
                  1378
                </div>
              </div>
              <div className={styles.item}>
                <img
                  className={styles.imgicon}
                  src="https://new.camri.go.th/_admin/file-download/FM-30-1566371339.png"
                />
                สายด่วนสุขภาพจิต
                <div className={styles.phonenum}>
                  1323
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
