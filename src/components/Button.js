import classNames from "classnames";
import { motion } from "framer-motion";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  outline,
  rounded,
  className,
  ...rest
}) {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const classes = classNames(
    className,
    "flex items-center justify-center px-6 py-3 border-2 cursor-pointer rounded-xl shadow-md shadow-gray-500",
    {
      "border-zinc-700 bg-zinc-700 text-white": primary && !outline,
      "border-green-800 bg-green-800 text-white": success && !outline,
      "border-yellow-500 bg-yellow-400 text-black": warning && !outline,

      "rounded-full": rounded,
      "border-purple-900 bg-white text-purple-900 ": outline && primary,
      "border-green-600 bg-white text-green-600": outline && success,
      "border-yellow-500 bg-white text-yellow-500": outline && warning,
    }
  );
  return (
    <motion.button
      layout="position"
      variants={buttonVariants}
      whileHover="hover"
      transition={{ layout: { type: "spring", damping: 25, stiffness: 100 } }}
      className={classes}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

Button.propTypes = {
  checkVariation: ({ primary, secondary, success, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success);
    if (count > 1)
      return new Error(
        "Only one of primary, secondary, success, warning or danger can be true"
      );
  },
};

export default Button;
