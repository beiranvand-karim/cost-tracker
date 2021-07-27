import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const UsersTable = ({ annaCost }) => {
  return (
    <div className="users-table">
      <TableContainer component={Paper}>
        {annaCost.length > 0 && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">costItem</TableCell>
                <TableCell align="right">category</TableCell>
                <TableCell align="right">description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {annaCost.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.costItem}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

export default UsersTable;
