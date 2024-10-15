import 'tailwindcss/tailwind.css'
import {  TextField, IconButton } from '@material-ui/core';

import { SearchOutlined } from '@material-ui/icons';

interface SearchBarProps {
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = (props: SearchBarProps) => {


    return (
        <div className="bg-white rounded-full flex justify-center items-center w-full">
    <div className="relative flex rounded-full w-full">
      {/* Select Dropdown */}
      <select className="text-lg text-gray-2 rounded-full bg-transparent ml-2 mr-2">
        <option className="text-base cursor-pointer" value="All">All</option>
        <option className="text-base cursor-pointer" value="Patients">Patients</option>
        <option className="text-base cursor-pointer" value="Reports">Reports</option>
        <option className="text-base cursor-pointer" value="Settings">Settings</option>
      </select>

      {/* TextField */}
      <TextField
        className="flex w-full bg-transparent text-gray-2 "
        placeholder={props.placeholder}
        onChange={props.onChange}
        InputProps={{
           disableUnderline: true,
          endAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          )
        }}
      />
    </div>
  </div>
        );
}

export default SearchBar;
