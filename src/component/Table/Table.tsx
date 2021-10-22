import React from 'react';
import { ISalary } from 'services/salary';
import { TableStyled, TheadTrStyled } from 'component/Table/Table.styled';

interface ITableProps {
  src: ISalary[];
}

const Table = ({ src }: ITableProps) => (
  <TableStyled>
    <thead>
      <TheadTrStyled>
        <th>No</th>
        <th>Regular</th>
        <th>Bonus</th>
      </TheadTrStyled>
    </thead>
    <tbody>
      {src.length ? (
        src.map(({ bonus, regular }, i) => (
          <tr key={`${bonus}-${regular}`}>
            <td>{i + 1}</td>
            <td>{regular}</td>
            <td>{bonus}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No data yet</td>
        </tr>
      )}
    </tbody>
  </TableStyled>
);

export default Table;
