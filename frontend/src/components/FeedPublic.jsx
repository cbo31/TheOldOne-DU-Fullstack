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


{/* ======================================
    Main component: FeedPublic
    ====================================== */}

export default function FeedPublic() {
    const [open, setOpen] = React.useState(false);
    const openCreateDialog = () => setOpen(true); 
    const closeCreateDialog = () => setOpen(false);
    const createPublication = ({ text, imageUrl }) => {
    };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}> 
        <Card sx={{ width: 600, maxWidth: "100%", mx: "auto" }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
                E
            </Avatar>
            }
            title="Eddy Malou"
            subheader="February 24, 2026"
        />
        <CardMedia
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAPnjjYw7fRQ2SYiBpK5yV6dAnbnXdqdHZg&s"
            alt="Eddy"
            sx={{width: "100%", height: "auto"}}      
        />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            La congolexicomatisation des lois du marché.
            </Typography>
        </CardContent>
        <CardActions
        sx={{display: "flex", width: "100%"}}
        >
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <Button
            variant="contained"
            onClick={openCreateDialog}
            sx={{marginLeft: "auto", backgroundColor: "#C45A3B", borderRadius: "14px"}}
        >
            PUBLIER
        </Button>
        </CardActions>    
    </Card>


{/* ======================================
    Dialog used to create a new publication
    ====================================== */}

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


{/* ======================================
    Component: CreatePublicationDialog
    ====================================== */}

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


