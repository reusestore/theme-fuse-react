import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { setProductsSearchText } from '../store/productsSlice';

function ProductsHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ eCommerceApp }) => eCommerceApp.products.searchText);
	const mainTheme = useSelector(selectMainTheme);

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
					<Icon className="text-32">shopping_basket</Icon>
				</motion.div>
				<motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.2 } }} delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Products
					</Typography>
				</motion.div>
			</div>

			<div className="flex flex-1 items-center justify-center px-12">
				<ThemeProvider theme={mainTheme}>
					<Paper
						component={motion.div}
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
						className="flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow"
					>
						<Icon color="action">search</Icon>

						<Input
							placeholder="Search"
							className="flex flex-1 mx-8"
							disableUnderline
							fullWidth
							value={searchText}
							inputProps={{
								'aria-label': 'Search'
							}}
							onChange={ev => dispatch(setProductsSearchText(ev))}
						/>
					</Paper>
				</ThemeProvider>
			</div>
			<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}>
				<Button
					component={Link}
					to="/apps/e-commerce/products/new"
					className="whitespace-nowrap"
					variant="contained"
					color="secondary"
				>
					<span className="hidden sm:flex">Add New Product</span>
					<span className="flex sm:hidden">New</span>
				</Button>
			</motion.div>
		</div>
	);
}

export default ProductsHeader;
