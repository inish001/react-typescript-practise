type GreetProps = {
  name: string;
  messsages: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isLoggedIn
        ? `Welcome {props.name} !!! You have {props.messsages} unread messsages`
        : "You are not LoggedIN"}
    </>
  );
};

export default Greet;
