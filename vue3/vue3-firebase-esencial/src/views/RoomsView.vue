<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        Rooms
      </h1>

      <!--RoomsComponent
        :unread-messages="unreadMessages"
        :rooms="$store.getters['rooms/roomsByDate']"
      /-->
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import RoomsComponent from "../components/RoomsComponent.vue";
/* (18) -> Agregar documentos y colecciones
import {db} from "../firebase";
*/

export default {
  name: "RoomsView",
  /* (18) -> Agregar documentos y colecciones
    async created(){
    //Set
    //const user = { name: "Juan Andres", city: "Valencia", country: "Spain" };

    //await db
    //  .collection("users")
    //  .doc("juanwmedia")
    //  .set(user, {merge:true});
 
    // Add
    //await db.collection("users").add(user);

    //Get new ID and then add
    //const newDocRef = db.collection("users").doc();
    //const newId= newDocRef.id;
    //await newDocRef.set({ name:"Guizmo", created: Date.now(), id: newId });

    //Update part of a document
    //const uniqueId ="9Uv5RoPtrIRr1YiKsdlc";
    //await db
    //  .collection("users")
    //  .doc(uniqueId)
    //  .update({name: "Super Guizmo", specie: "black cat" }); 

    // Delete a document
    //  await db
    //  .collection("users")
    //  .doc(uniqueId)
    //  .delete()
 
    // Read a document 
    //const document = await db
    //  .collection("users")
    //  .doc("juanwmedia")
    //  .get();
    //  console.log(document.data());
    //  console.log(document.id); // Document ID
    //  console.log(document.exists); // Document exists (or not)

    // Read all documents from a collections
    //const collection = await db
    //  .collection("users")
    //  .get();
    //collection.forEach(doc => console.log(doc.id, doc.data()));

    // Read a document from a subcollection
    //const subDocument = await db
    //  .collection("users")
    //  .doc("juanwmedia")
    //  .collection("meta")
    //  .doc("books")
    //  .get();

    //const subDocument = await db
    //  .doc("users/juanwmedia/meta/books")
    //  .get();

    //console.log(subDocument.data());

    // Listen for changes
    //db
    //  .collection("users")
    //  .doc("juanwmedia")
    //  .onSnapshot((docSnapshot => console.log(docSnapshot.data())));
  
    // Listen for query changes
    //db
    //  .collection("users")
    //  .where("name", "==", "Guizmo")
    //  //.onSnapshot(querySnapshot => console.log(querySnapshot));
    //  .onSnapshot(
    //    querySnapshot => querySnapshot.forEach(
    //      docSnapshot => console.log(docSnapshot.id)
    //    )
    //  );
    
    // Listen for query type changes
    //const unsub = db.collection("users")
    //  .where("name", "==", "Guizmo")
    //  .onSnapshot(querySnapshot => {
    //    querySnapshot.docChanges().forEach(change => {
    //        if (change.type === "added") {
    //            console.log("Added: ", change.doc.data());
    //        }
    //        if (change.type === "modified") {
    //            console.log("Modified: ", change.doc.data());
    //        }
    //        if (change.type === "removed") {
    //            console.log("Removed: ", change.doc.data());
    //        }
    //    });
    //});
    //unsub();

  },*/

  computed: {
    ...mapState("rooms", ["rooms"]),
    ...mapState("messages", ["messages"]),
    ...mapState("user", ["meta"]),
    unreadMessages() {
      return this.messages.filter(message => {
        return (
          // User participated
          this.meta.joined[message.roomId] &&
          // Message sent after user last connection
          this.meta.joined[message.roomId] < message.createdAt
        );
      });
    }
  },
  components: {
    RoomsComponent
  }
};
</script>
