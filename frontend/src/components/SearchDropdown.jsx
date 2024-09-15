import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";

const SearchDropdown = ({ results, onProductClick }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        zIndex: 1,
        mt: 1,
        maxHeight: 400,
        overflow: "auto",
      }}
    >
      <List disablePadding>
        {results.map((product) => (
          <ListItem
            key={product.id}
            onClick={() => onProductClick(product.id)}
            sx={{
              cursor: "pointer",
              "&:hover": { bgcolor: "action.hover" },
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <ListItemAvatar>
              <Avatar
                src={product.imageUrl}
                alt={product.name}
                variant="rounded"
                sx={{ width: 60, height: 60, mr: 2 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" noWrap>
                  {product.name}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  ${product.price.toFixed(2)}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SearchDropdown;
