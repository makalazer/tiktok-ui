import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/1f37528a32cb82036101b84b51d379a4~c5_300x300.webp?x-expires=1657933200&x-signature=gyAxNXowvrLOO%2BWfgluKog9h1TI%3D"
                alt="Avatar"
                className={cx("avatar")}
            ></img>
            <div className={cx("info")}>
                <p className={cx("id-wrapper")}>
                    <h4 className={cx("id")}>.eimifukada._japanese</h4>
                    <FontAwesomeIcon className={cx("icon")} icon={faCircleCheck} />
                </p>
                <h4 className={cx("name")}>EIMI FUKADA</h4>
            </div>
        </div>
    );
}

export default AccountItem;
