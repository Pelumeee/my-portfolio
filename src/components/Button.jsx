const Button = ({ text, bg = false, border = true }) => {
    return <span className={`inline-block rounded-[47px] py-3 px-5 ${bg && "bg-purple"} text-[#fff] font-semibold md:text-sm text-xs ${border && "border"} border-[#3C3B3B]`}>{text}</span>;
};

export default Button;
