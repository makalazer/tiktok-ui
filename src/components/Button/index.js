import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    textOnly = false,
    rounded = false,
    disable = false,
    leftIcon,
    rightIcon,
    className,
    size,
    onClick,
    ...passProps
}) {
    let Comp = "button";

    const classes = cx(["wrapper", size, className], {
        primary,
        outline,
        textOnly,
        disable,
        rounded,
    });

    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = "Link";
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
