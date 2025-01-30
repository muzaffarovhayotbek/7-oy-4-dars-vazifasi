import React, { useEffect, useRef, useState } from 'react';
import about from '../assets/data.json';
import close from '../assets/close.svg';
import arrow from '../assets/arrow.svg';

function Select() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(about.countries[0]);
  const [filter, setFilter] = useState(about.countries);
  const [field, setField] = useState('');
  const searchRef = useRef();

  function handleToggle() {
    setOpen(!open);
  }

  function handleSelect(phone) {
    setCurrent(phone);
    setOpen(false);
  }

  useEffect(() => {
    if (field.length == 0) {
      setFilter(about.countries);
    } else {
      let copied = [...filter];
      copied = copied.filter((item) => {
        return item.name.includes(field);
      });

      setFilter(copied);
    }
  }, [field]);
  useEffect(() => {
    if (open) {
      searchRef.current.focus();
    }
    setFilter(about.countries);
    setField('');
  }, [open]);

  return (
    <div onClick={handleToggle} className="">
      <div>
        <div className="px-2 py-3 border min-h-14 border-grey-300 max-w-[350px] rounded-md cursor-pointer hover: bg-grey-100 transition duration-200">
          {!open && (
            <div className="pr-8">
              <label>Phone</label>
              <div className="flex items-center justify-between -mt-1.5">
                <div className="flex items-center">
                  <h2>
                    {current?.name} {current?.flag}
                  </h2>
                  <h3 className="text-grey-600">{current?.code}</h3>
                </div>
                <img src={arrow} className="w-2.5" alt="" />
              </div>
            </div>
          )}
          {open && (
            <div className="flex items-center justify-between pr-8 gap-3">
              <input
                ref={searchRef}
                className="outline-0 w-full"
                type="text"
                placeholder="Enter phone"
                value={field}
                onChange={(e) => {
                  setField(e.target.value);
                }}
              />
              <img src={close} className="w-2.5" alt="close" />
            </div>
          )}
        </div>
      </div>
      {open && (
        <ul className="bg-white shadow-sm rounded-sm max-h-60 overflow-y-auto max-w-[350px] mt-2 ">
          {filter.length > 0 &&
            filter.map((phone, index) => {
              return (
                <li
                  onClick={() => handleSelect(phone)}
                  key={index}
                  className="flex gap-3 items-center cursor-pointer hover:bg-grey-200 p-1"
                >
                  <h2>{phone.name}</h2>
                  <p>{phone.code}</p>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default Select;
