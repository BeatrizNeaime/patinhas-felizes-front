import { Divider, PageHeader, PageTitle, Subtitle } from "../../styles/sharedStyles";

const Header = ({title, subtitle}) => {
  return (
    <PageHeader>
      <PageTitle>{title}</PageTitle>
      <Subtitle>
        {subtitle}
      </Subtitle>
      <Divider />
    </PageHeader>
  );
};

export default Header;
