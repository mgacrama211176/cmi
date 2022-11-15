import styled from "styled-components";
import Link from "next/link";

const Container = styled.nav`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  height: 25em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  aspect-ratio: auto;
`;
const NavigationContent = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  background-color: transparent;
  padding: 15px;
  font-family: monospace;
  font-size: x-large;
  color: white;
`;

const Logo = styled.img``;

const Company = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: monospace;
  font-size: 62px;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
  flex-grow: 1px;
  cursor: pointer;
`;

const MenuItem = styled.div``;

const Text = styled.p`
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const navigations = ["Home", "Technology", "Lifestyle", "Finance"];
  return (
    <Container>
      <Wrapper>
        <Company>Creative Media Incorporated</Company>
        <NavigationContent>
          <Logo />
          <Menu>
            {navigations.map((pages) => (
              <MenuItem key={pages}>
                {pages === "Home" ? (
                  <>
                    <Link href="/">
                      <Text>{pages}</Text>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={`Categories/${pages}`}>
                      <Text>{pages}</Text>
                    </Link>
                  </>
                )}
              </MenuItem>
            ))}
          </Menu>
        </NavigationContent>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
