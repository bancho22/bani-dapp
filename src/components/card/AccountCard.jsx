import PropTypes from "prop-types";
import Card from "./Card";

function AccountCard({ account, isLoadingAccount, loadAccount }) {
  return (
    <Card className="accountCard" header="Account Info">
      {account ? (
        <>
          <div className="labels">
            <span>Address</span>
          </div>
          <div className="values">
            <span>{account}</span>
          </div>
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
