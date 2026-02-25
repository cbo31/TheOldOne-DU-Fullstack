import * as React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Container,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FavoriteIcon,
  red,
} from "../assets/mui";


// ======================================
// Main component: FeedPublic
// ======================================

export default function FeedPublic({ user }) {
    const [open, setOpen] = React.useState(false);
    const openCreateDialog = () => setOpen(true); 
    const closeCreateDialog = () => setOpen(false);
    const [posts, setPosts] = React.useState([
    {
      id: 1,
      author: "Eddy Malou",
      date: "February 24, 2026",
      text: "La congolexicomatisation des lois du marché.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAPnjjYw7fRQ2SYiBpK5yV6dAnbnXdqdHZg&s",
    },
    ]);
    const createPublication = ({ text, imageUrl }) => {
      const newPost = {
        id: Date.now(),
        author: user?.name ?? "Utilisateur",
        date: new Date().toLocaleDateString(),
        text,
        imageUrl,
      };

      setPosts((prev) => [newPost, ...prev]);
    };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}> 

          {/* <Avatar sx={{ bgcolor: red[500] }}>
            {(user?.name?.[0] ?? "U").toUpperCase()}
          </Avatar> */}

      <Card sx={{ width: 600, maxWidth: "100%", mx: "auto", mb: 3 }}>
        <CardContent>
          <div
            onClick={openCreateDialog}
            style={{
              backgroundColor: "#F0F2F5",
              borderRadius: "20px",
              padding: "12px 16px",
              cursor: "pointer",
              color: "#555",
              textAlign: "left",
            }}
          >
            Quoi de neuf ?
          </div>
        </CardContent>
      </Card>

      {posts.map((post) => (
        <Card key={post.id} sx={{ width: 600, maxWidth: "100%", mx: "auto", mb: 3 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }}>
                {post.author[0]}
              </Avatar>
            }
            title={post.author}
            subheader={post.date}
          />

          {post.imageUrl && (
            <CardMedia
              component="img"
              image={post.imageUrl}
              sx={{ width: "100%", height: "auto" }}
            />
          )}

          {post.text && (
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {post.text}
              </Typography>
            </CardContent>
          )}

          <CardActions>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}    

      <CreatePublicationDialog
              open={open}
              onClose={closeCreateDialog}
              onCreate={(payload) => {
                createPublication(payload);
                closeCreateDialog();
              }}
            />

</Container>
  );
}


// ======================================
//   Component: CreatePublicationDialog
// ======================================

function CreatePublicationDialog({ open, onClose, onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const text = (formJson.text ?? "").toString().trim();
    const imageUrl = (formJson.imageUrl ?? "").toString().trim();

    if (text === "" && imageUrl === "") return;

    onCreate({ text, imageUrl });

    event.currentTarget.reset();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Quoi de neuf ?</DialogTitle>

      <DialogContent>
        <form id="post-form" onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            name="text"
            label="..."
            fullWidth
            multiline
            minRows={3}
          />

          <TextField
            margin="dense"
            name="imageUrl"
            label="Colle l'URL de ton image"
            fullWidth
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}  variant="outlined" sx={{ borderColor: "grey.400", color: "inherit",borderRadius: "14px" }} >
            Annuler
        </Button>
        <Button type="submit" form="post-form" variant="contained" sx={{ borderColor: "grey.400", backgroundColor: "#C45A3B", borderRadius: "14px" }} >
            Publier
        </Button>
      </DialogActions>
    </Dialog>
  );
}


