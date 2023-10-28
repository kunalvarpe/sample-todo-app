import axios from "axios";
import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../component/Spinner";
import CheckIcon from "../icons/check.svg";
import PendingIcon from "../icons/pending.svg";

export interface TableData {
  readonly id: number;
  readonly title: string;
  readonly userId: number;
  readonly completed?: boolean;
}

export const TodoTable: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/todo") // Hardcoded for local use
      .then((resp) => {
        if (resp.data) {
          setTableData([...resp.data]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="flex flex-col mb-20">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    User ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-black">
                {tableData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-xs text-gray-600 tracking-wider">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-xs text-gray-600 tracking-wider">
                      {item.userId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-xs text-gray-900 capitalize tracking-wider">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-xs text-gray-600 capitalize tracking-wider">
                      {item.completed ? (
                        <p className="flex gap-4 items-center">
                          <img src={CheckIcon} alt="Your SVG" />
                          Completed
                        </p>
                      ) : (
                        <p className="flex gap-4 items-center">
                          <img src={PendingIcon} alt="Your SVG" />
                          Pending
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
TodoTable.displayName = "TodoTable";
