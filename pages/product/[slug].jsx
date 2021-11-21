import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Link, Grid, List, ListItem, Typography, Card, Button } from "@mui/material";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import useStyles from "../../utils/styles";

export default function Product() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) {
    return <div>Product Not Found!</div>;
  }
  return (
    <div>
      <Layout title={product.name} description={product.description}>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>
              <Typography>Back to Products</Typography>
            </Link>
          </NextLink>
        </div>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image
              src={product.image}
              alt={product.name}
              height={640}
              width={640}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography component="h1">{product.name}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Brand: {product.brand}</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Rating: {product.rating} stars ({product.numReviews} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Discription: {product.description}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>${product.price}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Status</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{product.countInStock > 0 ? "In Stock" : "Unavailable"}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button type="button" fullWidth color="primary" variant="contained">
                    Add to cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}
