import PropTypes from "prop-types";
import Card from "../card/Card";
import "./AccountCard.css";

function AccountCard({ account, isLoadingAccount, loadAccount }) {
  return (
    <Card
      className={`accountCard ${account.length > 0 ? "ready" : ""}`}
      header="Account Info"
    >
      {account ? (
        <>
          <span>Address</span>
          <span className="bold">{account}</span>
        </>
      ) : (
        <button onClick={() => !isLoadingAccount && loadAccount()}>
          Connect account
        </button>
      )}
    </Card>
  );
}

AccountCard.propTypes = {
  account: PropTypes.string,
  isLoadingAccount: PropTypes.bool,
  loadAccount: PropTypes.func,
};

export default AccountCard;
