import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionsApp from "../actions/appActions";

const OptionField = styled.div`
  position: relative;
  font-size: 1rem;
  align-self: center;
  cursor: pointer;
  padding: 1.2rem;
  flex-grow: 1;
  color: white;
  text-align: center;
  z-index: 1;
  border-right: 1px solid white;
  &:hover {
    background-color: #2e3846;
  }
`;

const ListElement = styled.div`
  padding: 0.9rem;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: #c4d4e8;
  color: black;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #95a0af;
  }
`;

const TeamsMenuField = styled.div`
  position: absolute;
  margin-top: 1.2rem;
  text-align: center;
  width: 100%;
  left: 0;
`;

const ListDivider = styled.div`
  height: 1px;
  background-color: black;
`;

const IconField = styled.div`
  width: 1rem;
  height: 1rem;
  align-self: center;
`;

const IconImage = styled.img`
  width: 100%;
`;
const CountriesOptions = () => {
  const [teamsMenuActive, setTeamsMenuActive] = useState("");
  const dispatch = useDispatch();

  return (
    <OptionField
      onMouseEnter={() => setTeamsMenuActive(true)}
      onMouseLeave={() => setTeamsMenuActive("")}
      onClick={() => {
        dispatch(actionsApp.changeState("SET_MAIN_CONTENT", "Kraje"));
      }}
    >
      Kraje
      <TeamsMenuField>
        {teamsMenuActive && (
          <>
            <ListElement>
              Niemcy
              <IconField>
                <IconImage
                  src={
                    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMTUuOTIzLDM0NS4wNDNDNTIuMDk0LDQ0Mi41MjcsMTQ1LjkyOSw1MTIsMjU2LDUxMnMyMDMuOTA2LTY5LjQ3MywyNDAuMDc3LTE2Ni45NTdMMjU2LDMyMi43ODMNCglMMTUuOTIzLDM0NS4wNDN6Ii8+DQo8cGF0aCBkPSJNMjU2LDBDMTQ1LjkyOSwwLDUyLjA5NCw2OS40NzIsMTUuOTIzLDE2Ni45NTdMMjU2LDE4OS4yMTdsMjQwLjA3Ny0yMi4yNjFDNDU5LjkwNiw2OS40NzIsMzY2LjA3MSwwLDI1NiwweiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0xNS45MjMsMTY2Ljk1N0M1LjYzMywxOTQuNjksMCwyMjQuNjg2LDAsMjU2czUuNjMzLDYxLjMxLDE1LjkyMyw4OS4wNDNoNDgwLjE1NQ0KCUM1MDYuMzY4LDMxNy4zMSw1MTIsMjg3LjMxNCw1MTIsMjU2cy01LjYzMi02MS4zMS0xNS45MjMtODkuMDQzSDE1LjkyM3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                  }
                />
              </IconField>
            </ListElement>
            <ListDivider />
            <ListElement>
              Anglia
              <IconField>
                <IconImage
                  src={
                    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik01MDkuODMzLDIyMi42MDloLTIyMC40NGgtMC4wMDFWMi4xNjdDMjc4LjQ2MSwwLjc0NCwyNjcuMzE3LDAsMjU2LDBzLTIyLjQ2MSwwLjc0NC0zMy4zOTEsMi4xNjcNCgl2MjIwLjQ0djAuMDAxSDIuMTY3QzAuNzQ0LDIzMy41MzksMCwyNDQuNjgxLDAsMjU2YzAsMTEuMzE5LDAuNzQ0LDIyLjQ2MSwyLjE2NywzMy4zOTFoMjIwLjQ0aDAuMDAxdjIyMC40NDINCglDMjMzLjUzOSw1MTEuMjU2LDI0NC42ODMsNTEyLDI1Niw1MTJzMjIuNDYxLTAuNzQzLDMzLjM5MS0yLjE2N3YtMjIwLjQ0di0wLjAwMWgyMjAuNDQyQzUxMS4yNTYsMjc4LjQ2MSw1MTIsMjY3LjMxOSw1MTIsMjU2DQoJQzUxMiwyNDQuNjgxLDUxMS4yNTYsMjMzLjUzOSw1MDkuODMzLDIyMi42MDl6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                  }
                />
              </IconField>
            </ListElement>
            <ListDivider />
            <ListElement>
              Hiszpania
              <IconField>
                <IconImage
                  src={
                    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMCwyNTZjMCwzMS4zMTQsNS42MzMsNjEuMzEsMTUuOTIzLDg5LjA0M0wyNTYsMzY3LjMwNGwyNDAuMDc3LTIyLjI2MQ0KCUM1MDYuMzY3LDMxNy4zMSw1MTIsMjg3LjMxNCw1MTIsMjU2cy01LjYzMy02MS4zMS0xNS45MjMtODkuMDQzTDI1NiwxNDQuNjk2TDE1LjkyMywxNjYuOTU3QzUuNjMzLDE5NC42OSwwLDIyNC42ODYsMCwyNTZ6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTQ5Ni4wNzcsMTY2Ljk1N0M0NTkuOTA2LDY5LjQ3MywzNjYuMDcxLDAsMjU2LDBTNTIuMDk0LDY5LjQ3MywxNS45MjMsMTY2Ljk1N0g0OTYuMDc3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMTUuOTIzLDM0NS4wNDNDNTIuMDk0LDQ0Mi41MjcsMTQ1LjkyOSw1MTIsMjU2LDUxMnMyMDMuOTA2LTY5LjQ3MywyNDAuMDc3LTE2Ni45NTdIMTUuOTIzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                  }
                />
              </IconField>
            </ListElement>
            <ListDivider />
            <ListElement>
              Włochy
              <IconField>
                <IconImage
                  src={
                    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik01MTIsMjU2YzAtMTEwLjA3MS02OS40NzItMjAzLjkwNi0xNjYuOTU3LTI0MC4wNzd2NDgwLjE1NUM0NDIuNTI4LDQ1OS45MDYsNTEyLDM2Ni4wNzEsNTEyLDI1NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM2REE1NDQ7IiBkPSJNMCwyNTZjMCwxMTAuMDcxLDY5LjQ3MiwyMDMuOTA2LDE2Ni45NTcsMjQwLjA3N1YxNS45MjNDNjkuNDcyLDUyLjA5NCwwLDE0NS45MjksMCwyNTZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                  }
                />
              </IconField>
            </ListElement>
          </>
        )}
      </TeamsMenuField>
    </OptionField>
  );
};

export default CountriesOptions;
