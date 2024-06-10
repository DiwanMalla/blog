import { useContext } from "react";
import myContext from "../../../context/data/myContext";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import Layout from "../../../components/layout/Layout";

const AdminLogin = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        {/*Card*/}
        <Card
          className="w-full max-w-[24rem]"
          style={{
            background: mode === "dark" ? "rgb(30,41,59)" : "rgb(226,232,240)",
          }}
        >
          {/*CardHeader*/}
          <CardHeader
            color="blue"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
            style={{
              background: mode === "dark" ? "rgb(226,232,240" : "rgb(30,41,59)",
            }}
          >
            <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white ">
              <div className="flex justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
                  className="h-20 w-20"
                />
              </div>
            </div>
            {/*Top Heading*/}
            <Typography
              variant="h4"
              style={{
                color: mode === "dark" ? "rgb(30,41,59)" : "rgb(226,232,240)",
              }}
            >
              Admin Login
            </Typography>
          </CardHeader>
          {/*CardBody*/}
          <CardBody>
            <form className="flex flex-col gap-4">
              {/*first input*/}
              <div>
                <Input type="email" label="Email" name="email" />
              </div>
              {/*Second Input*/}
              <div>
                <Input type="password" label="Password" />
              </div>
              {/*Login Button*/}
              <Button
                style={{
                  background:
                    mode === "dark" ? "rgb(226,232,240)" : "rgb(30,41,59)",
                  color: mode === "dark" ? "rgb(30,41,59)" : "rgb(226,232,240)",
                }}
              >
                Login
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminLogin;
