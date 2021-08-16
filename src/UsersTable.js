import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      alignContent: 'center',
      alignItems: 'center',
      display: 'position',
      justifyItems: 'center',
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const UsersTable = ({ annaCost }) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  console.log(annaCost);
  return (
    <div className="users-table">
      <TableContainer component={Paper}>
        {annaCost.length > 0 && (
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">costItem</StyledTableCell>
                <StyledTableCell align="right">category</StyledTableCell>
                <StyledTableCell align="right">description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {annaCost.map((annaCost) => (
                <StyledTableRow key={annaCost.name}>
                  <StyledTableCell align="right">
                    {annaCost.costItem}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {annaCost.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {annaCost.description}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

export default UsersTable;
