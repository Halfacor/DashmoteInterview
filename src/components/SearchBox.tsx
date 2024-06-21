import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SearchBoxStyles from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (phrase: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  // return <div style={{ margin: "20px 16px 12px 16px" }}>SearchBox</div>;
  return (
    <Input
      className={SearchBoxStyles.search}
      size="large"
      placeholder="Search for a keyword"
      prefix={<SearchOutlined className={SearchBoxStyles.icon} />}
      onPressEnter={(e) => {
        onSearch((e.target as HTMLInputElement).value);
      }}
    />
  );
};

export default SearchBox;
