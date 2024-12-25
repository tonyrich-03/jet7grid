import { range } from './utils';

const gridStyles = {
  width: '100px',
  height: '100px',
  border: '1px solid grey',
  borderRadius: '5px',
  backgroundColor: '#f3f3f3',
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column', // Stack rows vertically
  alignItems: 'center', // Center rows horizontally
  marginTop: '30px', // Space above the grid
  gap: '10px', // Space between rows
};

const rowStyles = {
  display: 'flex', // Arrange columns horizontally
  gap: '10px', // Space between columns
};

function Grid({ numRows, numCols }) {
  return (
    <div style={containerStyles}>
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} style={rowStyles}>
          {range(numCols).map((colIndex) => (
            <div key={colIndex} style={gridStyles}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
