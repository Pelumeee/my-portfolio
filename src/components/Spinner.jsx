import ScaleLoader from "react-spinners/ScaleLoader";
const override = {
    display: "block",
    margin: "100px auto",
};
const Spinner = ({ loading }) => {
    return <ScaleLoader color="#9747FF" loading={loading} cssOverride={override} size={150} aria-label="Loading Spinner" data-testid="loader" />;
};

export default Spinner;
