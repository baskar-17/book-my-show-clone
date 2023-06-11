import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

function MyDisclosure(props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex items-center gap-3">
            {open ? (
              <BiChevronDown className={open ? "rotate-180 transform" : ""} />
            ) : (
              <BiChevronDown />
            )}
            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <div className="flex items-center gap-3 flex-wrap ">
              {props.tags.map((tag) => (
                <>
                  <div className="border-2 border-gray-200 p-2 rounded-2xl">
                    <span className="text-red-600">{tag}</span>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default MyDisclosure;
