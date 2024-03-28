
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { getStoreData } from '../../utility/localStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};


const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  const books = useLoaderData();

  const [read, setRead] = useState([]);
  console.log(read)
  useEffect(() => {
    const storedBookIds = getStoreData();
    if (books.length > 0) {
      const booksRead = books.filter(book => storedBookIds.includes(book.bookId));
      setRead(booksRead);

    }

  }, [books])

  return (

    <div className='container mx-auto mb-52 bg-gray-50 p-10 rounded-2xl flex justify-center items-center mt-20 '>
      <BarChart
        width={800}
        height={500}
        data={read}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Legend></Legend>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis className='font-semibold' dataKey="bookName" />
        <YAxis dataKey="totalPages" />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {read.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>

  );
}

