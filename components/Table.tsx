import React from 'react';

//create a props type for title (string) and data an array of objects, the objects can have any key values
type TableProps = {
  title: string;
  data: {
    [key: string]: string | number;
  }[];
};

function Table({ title, data }: TableProps) {
  if (data.length < 1) return null;
  return (
    <div className='col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200'>
      <header className='px-5 py-4 border-b border-slate-100'>
        <h2 className='font-semibold text-slate-800'>{title}</h2>
      </header>
      <div className='p-3'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            {/* Table header */}
            <thead className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm'>
              <tr>
                {/* map through the keys of the first object in the data array */}
                {Object.keys(data[0]).map((key, i) => (
                  <th className='p-2' key={i}>
                    <div className='font-semibold text-left'>{key}</div>
                  </th>
                ))}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className='text-sm font-medium divide-y divide-slate-100'>
              {/* map through the data array and print each row */}
              {data.map((obj, i) => (
                <tr key={i}>
                  {Object.values(obj).map((value, j) => (
                    <td key={j} className='p-2'>
                      <div className='text-left'>{value}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
