const replyIcons = document.querySelectorAll(".reply-icon-container");
const replyIconsDesktop = document.querySelectorAll(
  ".reply-icon-container-desktop"
);

const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");

const sendBtn = document.querySelector(".send-btn");
const deleteModal = document.querySelector(".delete-modal");

//Helper function to insert an element after another element
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

window.onload = function () {
  const commentContainers = document.querySelectorAll(".comment-container");
  for (let i = 0; i < commentContainers.length; i++) {
    commentContainers[i].style.transform = "translateX(0px)";
  }
  const repliesContainers = document.querySelectorAll(".replies-container");
  for (let i = 0; i < repliesContainers.length; i++) {
    repliesContainers[i].style.transform = "translateX(0px)";
  }
  document.querySelector(".add-a-comment-container").style.transform =
    "translateX(0px)";
};

for (let i = 0; i < replyIcons.length; i++) {
  replyIcons[i].addEventListener("click", function () {
    if (
      replyIcons[i].parentNode.parentNode.parentNode.nextElementSibling
        .className !== "reply-container" &&
      !replyIcons[
        i
      ].parentNode.parentNode.parentNode.nextElementSibling.matches(
        ".reply-container.ramses-miron"
      )
    ) {
      const replyContainer = document.createElement("div");
      replyContainer.className = "reply-container";
      replyContainer.style.marginBottom = "1rem";

      replyContainer.innerHTML += `<div class="avatar-julius-omo-desktop"></div>
      <textarea placeholder="Add a comment.."></textarea>
      <div class="avatar-and-reply-container">
        <div class="avatar-julius-omo"></div>
        <button class="reply-btn">REPLY</button>
      </div>`;

      if (
        replyIcons[i].parentNode.parentNode.childNodes[1].childNodes[1]
          .childNodes[1].className === "avatar-ramses-miron"
      ) {
        replyContainer.classList.add("ramses-miron");
      }
      insertAfter(
        replyContainer,
        replyIcons[i].parentNode.parentNode.parentNode
      );
    } else {
      replyIcons[i].parentNode.parentNode.parentNode.nextSibling.remove();
    }

    if (document.querySelector(".reply-container textarea")) {
      document
        .querySelector(".reply-container textarea")
        .setAttribute(
          "style",
          "height:" +
            document.querySelector(".reply-container textarea").scrollHeight +
            "px;overflow-y:hidden;"
        );
      document.querySelector(".reply-container textarea").addEventListener(
        "input",
        function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
        },
        false
      );
    }

    if (document.querySelector(".reply-btn")) {
      document
        .querySelector(".reply-btn")
        .addEventListener("click", function () {
          let replyDiv;
          if (
            document.querySelector(".reply-btn").parentNode.parentNode
              .previousSibling.childNodes[3].childNodes[1].childNodes[1]
              .childNodes[1].className === "avatar-amy-robson"
          ) {
            if (
              document.querySelector(".reply-container").childNodes[2].value !==
              ""
            ) {
              const repliesContainer =
                document.querySelector(".replies-container");
              replyDiv = document.createElement("div");
              replyDiv.className = "comment-container";
              replyDiv.style.transform = "translateX(0px)";
              replyDiv.classList.add("reply");
              replyDiv.innerHTML += `<div class="comment-container-part-1">
            <div class="vote-container-desktop">
              <div class="plus-icon"></div>
              <div class="votes">0</div>
              <div class="minus-icon"></div>
            </div>
          </div>
          <div class="comment-container-part-2">
            <div class="comment-header">
              <div class="comment-header-part-1">
                <div class="avatar-julius-omo"></div>
                <div class="username">juliusomo</div>
                <div class="you">you</div>
                <div class="time-posted">Just now</div>
              </div>
              <div class="comment-header-part-2">
                <div class="delete-and-edit-icons-container-desktop">
                  <div class="delete-icon-container">
                    <div class="delete-icon"></div>
                    <div class="delete-text">Delete</div>
                  </div>
                  <div class="edit-icon-container">
                    <div class="edit-icon"></div>
                    <div class="edit-text">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-content">
              <span class="at-the-rate-of">@amyrobson</span>  
              ${document.querySelector(".reply-container").childNodes[2].value}
            </div>
            <div class="vote-and-icons-container">
              <div class="vote-container">
                <div class="plus-icon"></div>
                <div class="votes">0</div>
                <div class="minus-icon"></div>
              </div>
              <div class="delete-and-edit-icons-container">
                <div class="delete-icon-container">
                  <div class="delete-icon"></div>
                  <div class="delete-text">Delete</div>
                </div>
                <div class="edit-icon-container">
                  <div class="edit-icon"></div>
                  <div class="edit-text">Edit</div>
                </div>
              </div>
            </div>
          </div>`;
              repliesContainer.appendChild(replyDiv);
              insertAfter(
                repliesContainer,
                document.querySelector(".reply-btn").parentNode.parentNode
                  .previousSibling
              );
              replyIcons[
                i
              ].parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.remove();
            }
          } else if (
            document.querySelector(".reply-btn").parentNode.parentNode
              .previousSibling.childNodes[3].childNodes[1].childNodes[1]
              .childNodes[1].className === "avatar-max-blagun"
          ) {
            if (
              document.querySelector(".reply-container").childNodes[2].value !==
              ""
            ) {
              const repliesContainer =
                document.querySelectorAll(".replies-container")[1];
              replyDiv = document.createElement("div");
              replyDiv.className = "comment-container";
              replyDiv.style.transform = "translateX(0px)";
              replyDiv.classList.add("reply");
              replyDiv.innerHTML += `<div class="comment-container-part-1">
            <div class="vote-container-desktop">
              <div class="plus-icon"></div>
              <div class="votes">0</div>
              <div class="minus-icon"></div>
            </div>
          </div>
          <div class="comment-container-part-2">
            <div class="comment-header">
              <div class="comment-header-part-1">
                <div class="avatar-julius-omo"></div>
                <div class="username">juliusomo</div>
                <div class="you">you</div>
                <div class="time-posted">Just now</div>
              </div>
              <div class="comment-header-part-2">
                <div class="delete-and-edit-icons-container-desktop">
                  <div class="delete-icon-container">
                    <div class="delete-icon"></div>
                    <div class="delete-text">Delete</div>
                  </div>
                  <div class="edit-icon-container">
                    <div class="edit-icon"></div>
                    <div class="edit-text">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-content">
              <span class="at-the-rate-of">@maxblagun</span>  
              ${document.querySelector(".reply-container").childNodes[2].value}
            </div>
            <div class="vote-and-icons-container">
              <div class="vote-container">
                <div class="plus-icon"></div>
                <div class="votes">0</div>
                <div class="minus-icon"></div>
              </div>
              <div class="delete-and-edit-icons-container">
                <div class="delete-icon-container">
                  <div class="delete-icon"></div>
                  <div class="delete-text">Delete</div>
                </div>
                <div class="edit-icon-container">
                  <div class="edit-icon"></div>
                  <div class="edit-text">Edit</div>
                </div>
              </div>
            </div>
          </div>`;
              repliesContainer.appendChild(replyDiv);
              insertAfter(
                repliesContainer,
                document.querySelector(".reply-btn").parentNode.parentNode
                  .previousSibling
              );
              replyIcons[
                i
              ].parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.remove();
            }
          } else if (
            document.querySelector(".reply-btn").parentNode.parentNode
              .previousSibling.childNodes[3].childNodes[1].childNodes[1]
              .childNodes[1].className === "avatar-ramses-miron"
          ) {
            if (
              document.querySelector(".reply-container").childNodes[2].value !==
              ""
            ) {
              const repliesContainer =
                document.querySelectorAll(".replies-container")[1];
              replyDiv = document.createElement("div");
              replyDiv.className = "comment-container";
              replyDiv.style.transform = "translateX(0px)";
              replyDiv.classList.add("reply");
              replyDiv.innerHTML += `<div class="comment-container-part-1">
            <div class="vote-container-desktop">
              <div class="plus-icon"></div>
              <div class="votes">0</div>
              <div class="minus-icon"></div>
            </div>
          </div>
          <div class="comment-container-part-2">
            <div class="comment-header">
              <div class="comment-header-part-1">
                <div class="avatar-julius-omo"></div>
                <div class="username">juliusomo</div>
                <div class="you">you</div>
                <div class="time-posted">Just now</div>
              </div>
              <div class="comment-header-part-2">
                <div class="delete-and-edit-icons-container-desktop">
                  <div class="delete-icon-container">
                    <div class="delete-icon"></div>
                    <div class="delete-text">Delete</div>
                  </div>
                  <div class="edit-icon-container">
                    <div class="edit-icon"></div>
                    <div class="edit-text">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-content">
              <span class="at-the-rate-of">@ramsesmiron</span>  
              ${document.querySelector(".reply-container").childNodes[2].value}
            </div>
            <div class="vote-and-icons-container">
              <div class="vote-container">
                <div class="plus-icon"></div>
                <div class="votes">0</div>
                <div class="minus-icon"></div>
              </div>
              <div class="delete-and-edit-icons-container">
                <div class="delete-icon-container">
                  <div class="delete-icon"></div>
                  <div class="delete-text">Delete</div>
                </div>
                <div class="edit-icon-container">
                  <div class="edit-icon"></div>
                  <div class="edit-text">Edit</div>
                </div>
              </div>
            </div>
          </div>`;
              repliesContainer.appendChild(replyDiv);
              insertAfter(
                repliesContainer,
                document.querySelector(".reply-btn").parentNode.parentNode
                  .parentNode.previousSibling
              );

              replyIcons[
                i
              ].parentNode.parentNode.parentNode.nextElementSibling.remove();
            }
          }

          if (
            document.querySelector(
              ".delete-and-edit-icons-container .delete-icon-container"
            )
          ) {
            const dynamicDeleteIcons = document.querySelectorAll(
              ".delete-and-edit-icons-container .delete-icon-container"
            );
            const dynamicEditIcons = document.querySelectorAll(
              ".delete-and-edit-icons-container .edit-icon-container"
            );
            for (let i = 0; i < dynamicDeleteIcons.length; i++) {
              dynamicDeleteIcons[i].addEventListener("click", function () {
                deleteModal.style.display = "block";
                document.querySelector("main").classList.add("overlay");
                const cancelBtn = document.querySelector(".cancel-btn");
                cancelBtn.addEventListener("click", function () {
                  deleteModal.style.display = "none";
                  document.querySelector("main").classList.remove("overlay");
                });
                const deleteBtn = document.querySelector(".delete-btn");
                deleteBtn.addEventListener("click", function () {
                  dynamicDeleteIcons[
                    i
                  ].parentNode.parentNode.parentNode.parentNode.remove();
                  deleteModal.style.display = "none";
                  document.querySelector("main").classList.remove("overlay");
                });
              });
              dynamicEditIcons[i].addEventListener("click", function () {
                let paragraph =
                  dynamicEditIcons[i].parentNode.parentNode
                    .previousElementSibling;
                if (paragraph.tagName === "DIV") {
                  const textarea = Object.assign(
                    document.createElement("textarea"),
                    {
                      innerHTML: paragraph.innerText,
                      style: `width: 100%;
                      height: 100px;
                      resize: none;
                      font-family: "Rubik", sans-serif;
                      font-size: 1rem;
                      padding: 0.5rem 1rem 0.9rem 1rem;
                      border-radius: 10px;
                      border: 2px solid var(--lightGrey);
                      line-height: 1.5;
                      margin-bottom: 0.75rem;
                      overflow-y: hidden;`,
                    }
                  );
                  textarea.addEventListener(
                    "input",
                    function () {
                      this.style.height = "auto";
                      this.style.height = this.scrollHeight + "px";
                    },
                    false
                  );
                  textarea.addEventListener("focus", function () {
                    this.style.height = "auto";
                    this.style.height = this.scrollHeight + "px";
                    textarea.style.outline = "none";
                    textarea.style.border = "2px solid var(--moderateBlue)";
                  });
                  textarea.addEventListener("focusout", function () {
                    this.style.height = "auto";
                    this.style.height = this.scrollHeight + "px";
                    textarea.style.border = "2px solid var(--lightGrey)";
                  });
                  paragraph.replaceWith(textarea);
                  const updateBtn = document.createElement("button");

                  updateBtn.className = "update-btn";
                  updateBtn.textContent = "UPDATE";
                  updateBtn.style.marginBottom = "0.75rem";
                  updateBtn.style.display = "inline-block";
                  insertAfter(updateBtn, textarea);
                  updateBtn.parentNode.style.textAlign = "right";
                  updateBtn.addEventListener("click", function () {
                    if (textarea.value !== "") {
                      updateBtn.parentNode.style.textAlign = "left";
                      const updatedDiv = document.createElement("div");
                      updatedDiv.innerHTML = `<span class="at-the-rate-of">${
                        textarea.value.split(" ")[0]
                      }</span> `;
                      let updatedDivText = textarea.value;
                      updatedDivText = updatedDivText
                        .split(" ")
                        .slice(1)
                        .join(" ");
                      updatedDiv.innerHTML += updatedDivText;
                      updatedDiv.className = "comment-content";
                      textarea.replaceWith(updatedDiv);
                      updateBtn.remove();
                    }
                  });
                }
              });
            }
          }

          function dynamicUpvoteMobile() {
            replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[3].textContent =
              parseInt(
                replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[3]
                  .textContent
              ) + 1;
            replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[5].addEventListener(
              "click",
              dynamicDownvoteMobile
            );
            replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[1].removeEventListener(
              "click",
              dynamicUpvoteMobile
            );
          }

          function dynamicDownvoteMobile() {
            if (
              parseInt(
                replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[3]
                  .textContent
              ) > 0
            ) {
              replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[3].textContent =
                parseInt(
                  replyDiv.childNodes[2].childNodes[5].childNodes[1]
                    .childNodes[3].textContent
                ) - 1;
              replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[1].addEventListener(
                "click",
                dynamicUpvoteMobile
              );
              replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[5].removeEventListener(
                "click",
                dynamicDownvoteMobile
              );
            }
          }
          replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[1].addEventListener(
            "click",
            dynamicUpvoteMobile
          );
          replyDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[5].addEventListener(
            "click",
            dynamicDownvoteMobile
          );
        });
    }
  });
}

for (let i = 0; i < replyIconsDesktop.length; i++) {
  replyIconsDesktop[i].addEventListener("click", function () {
    if (
      replyIconsDesktop[i].parentNode.parentNode.parentNode.parentNode
        .nextElementSibling.className !== "reply-container" &&
      !replyIconsDesktop[
        i
      ].parentNode.parentNode.parentNode.parentNode.nextElementSibling.matches(
        ".reply-container.ramses-miron"
      )
    ) {
      const replyContainer = document.createElement("div");
      replyContainer.className = "reply-container";
      replyContainer.style.marginBottom = "1rem";
      replyContainer.innerHTML += `<div class="avatar-julius-omo-desktop"></div>
          <textarea placeholder="Add a comment.."></textarea>
          <div class="avatar-and-reply-container">
            <div class="avatar-julius-omo"></div>
            <button class="reply-btn">REPLY</button>
          </div>`;
      if (
        replyIconsDesktop[i].parentNode.parentNode.childNodes[1].childNodes[1]
          .className === "avatar-ramses-miron"
      ) {
        replyContainer.classList.add("ramses-miron");
        replyContainer.childNodes[0].style.width = "2.9145rem";
      }
      insertAfter(
        replyContainer,
        replyIconsDesktop[i].parentNode.parentNode.parentNode.parentNode
      );
    } else {
      replyIcons[i].parentNode.parentNode.parentNode.nextSibling.remove();
    }

    if (document.querySelector(".reply-container textarea")) {
      document
        .querySelector(".reply-container textarea")
        .setAttribute(
          "style",
          "height:" +
            document.querySelector(".reply-container textarea").scrollHeight +
            "px;overflow-y:hidden;"
        );
      document.querySelector(".reply-container textarea").addEventListener(
        "input",
        function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
        },
        false
      );
    }

    if (document.querySelector(".reply-btn")) {
      document
        .querySelector(".reply-btn")
        .addEventListener("click", function () {
          let replyDiv;
          if (
            document.querySelector(".reply-btn").parentNode.parentNode
              .previousSibling.childNodes[3].childNodes[1].childNodes[1]
              .childNodes[1].className === "avatar-amy-robson"
          ) {
            if (
              document.querySelector(".reply-container").childNodes[2].value !==
              ""
            ) {
              const repliesContainer =
                document.querySelector(".replies-container");
              replyDiv = document.createElement("div");
              replyDiv.className = "comment-container";
              replyDiv.style.transform = "translateX(0px)";
              replyDiv.classList.add("reply");
              replyDiv.innerHTML += `<div class="comment-container-part-1">
            <div class="vote-container-desktop">
              <div class="plus-icon"></div>
              <div class="votes">0</div>
              <div class="minus-icon"></div>
            </div>
          </div>
          <div class="comment-container-part-2">
            <div class="comment-header">
              <div class="comment-header-part-1">
                <div class="avatar-julius-omo"></div>
                <div class="username">juliusomo</div>
                <div class="you">you</div>
                <div class="time-posted">Just now</div>
              </div>
              <div class="comment-header-part-2">
                <div class="delete-and-edit-icons-container-desktop">
                  <div class="delete-icon-container">
                    <div class="delete-icon"></div>
                    <div class="delete-text">Delete</div>
                  </div>
                  <div class="edit-icon-container">
                    <div class="edit-icon"></div>
                    <div class="edit-text">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-content">
              <span class="at-the-rate-of">@amyrobson</span>  
              ${document.querySelector(".reply-container").childNodes[2].value}
            </div>
            <div class="vote-and-icons-container">
              <div class="vote-container">
                <div class="plus-icon"></div>
                <div class="votes">0</div>
                <div class="minus-icon"></div>
              </div>
              <div class="delete-and-edit-icons-container">
                <div class="delete-icon-container">
                  <div class="delete-icon"></div>
                  <div class="delete-text">Delete</div>
                </div>
                <div class="edit-icon-container">
                  <div class="edit-icon"></div>
                  <div class="edit-text">Edit</div>
                </div>
              </div>
            </div>
          </div>`;
              repliesContainer.appendChild(replyDiv);
              insertAfter(
                repliesContainer,
                document.querySelector(".reply-btn").parentNode.parentNode
                  .previousSibling
              );
              replyIconsDesktop[
                i
              ].parentNode.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.remove();
            }
          } else if (
            document.querySelector(".reply-btn").parentNode.parentNode
              .previousSibling.childNodes[3].childNodes[1].childNodes[1]
              .childNodes[1].className === "avatar-max-blagun"
          ) {
            if (
              document.querySelector(".reply-container").childNodes[2].value !==
              ""
            ) {
              const repliesContainer =
                document.querySelectorAll(".replies-container")[1];
              replyDiv = document.createElement("div");
              replyDiv.className = "comment-container";
              replyDiv.style.transform = "translateX(0px)";
              replyDiv.classList.add("reply");
              replyDiv.innerHTML += `<div class="comment-container-part-1">
            <div class="vote-container-desktop">
              <div class="plus-icon"></div>
              <div class="votes">0</div>
              <div class="minus-icon"></div>
            </div>
          </div>
          <div class="comment-container-part-2">
            <div class="comment-header">
              <div class="comment-header-part-1">
                <div class="avatar-julius-omo"></div>
                <div class="username">juliusomo</div>
                <div class="you">you</div>
                <div class="time-posted">Just now</div>
              </div>
              <div class="comment-header-part-2">
                <div class="delete-and-edit-icons-container-desktop">
                  <div class="delete-icon-container">
                    <div class="delete-icon"></div>
                    <div class="delete-text">Delete</div>
                  </div>
                  <div class="edit-icon-container">
                    <div class="edit-icon"></div>
                    <div class="edit-text">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-content">
              <span class="at-the-rate-of">@maxblagun</span>  
              ${document.querySelector(".reply-container").childNodes[2].value}
            </div>
            <div class="vote-and-icons-container">
              <div class="vote-container">
                <div class="plus-icon"></div>
                <div class="votes">0</div>
                <div class="minus-icon"></div>
              </div>
              <div class="delete-and-edit-icons-container">
                <div class="delete-icon-container">
                  <div class="delete-icon"></div>
                  <div class="delete-text">Delete</div>
                </div>
                <div class="edit-icon-container">
                  <div class="edit-icon"></div>
                  <div class="edit-text">Edit</div>
                </div>
              </div>
            </div>
          </div>`;
              repliesContainer.appendChild(replyDiv);
              insertAfter(
                repliesContainer,
                document.querySelector(".reply-btn").parentNode.parentNode
                  .previousSibling
              );
              replyIconsDesktop[
                i
              ].parentNode.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.remove();
            }
          } else if (
            document.querySelector(".reply-btn").parentNode.parentNode
              .previousSibling.childNodes[3].childNodes[1].childNodes[1]
              .childNodes[1].className === "avatar-ramses-miron"
          ) {
            if (
              document.querySelector(".reply-container").childNodes[2].value !==
              ""
            ) {
              const repliesContainer =
                document.querySelectorAll(".replies-container")[1];
              replyDiv = document.createElement("div");
              replyDiv.className = "comment-container";
              replyDiv.style.transform = "translateX(0px)";
              replyDiv.classList.add("reply");
              replyDiv.innerHTML += `<div class="comment-container-part-1">
            <div class="vote-container-desktop">
              <div class="plus-icon"></div>
              <div class="votes">0</div>
              <div class="minus-icon"></div>
            </div>
          </div>
          <div class="comment-container-part-2">
            <div class="comment-header">
              <div class="comment-header-part-1">
                <div class="avatar-julius-omo"></div>
                <div class="username">juliusomo</div>
                <div class="you">you</div>
                <div class="time-posted">Just now</div>
              </div>
              <div class="comment-header-part-2">
                <div class="delete-and-edit-icons-container-desktop">
                  <div class="delete-icon-container">
                    <div class="delete-icon"></div>
                    <div class="delete-text">Delete</div>
                  </div>
                  <div class="edit-icon-container">
                    <div class="edit-icon"></div>
                    <div class="edit-text">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-content">
              <span class="at-the-rate-of">@ramsesmiron</span>  
              ${document.querySelector(".reply-container").childNodes[2].value}
            </div>
            <div class="vote-and-icons-container">
              <div class="vote-container">
                <div class="plus-icon"></div>
                <div class="votes">0</div>
                <div class="minus-icon"></div>
              </div>
              <div class="delete-and-edit-icons-container">
                <div class="delete-icon-container">
                  <div class="delete-icon"></div>
                  <div class="delete-text">Delete</div>
                </div>
                <div class="edit-icon-container">
                  <div class="edit-icon"></div>
                  <div class="edit-text">Edit</div>
                </div>
              </div>
            </div>
          </div>`;
              repliesContainer.appendChild(replyDiv);
              insertAfter(
                repliesContainer,
                document.querySelector(".reply-btn").parentNode.parentNode
                  .parentNode.previousSibling
              );

              replyIcons[
                i
              ].parentNode.parentNode.parentNode.nextElementSibling.remove();
            }
          }
          if (
            document.querySelector(
              ".delete-and-edit-icons-container-desktop .delete-icon-container"
            )
          ) {
            const dynamicDeleteIcons = document.querySelectorAll(
              ".delete-and-edit-icons-container-desktop .delete-icon-container"
            );
            const dynamicEditIcons = document.querySelectorAll(
              ".delete-and-edit-icons-container-desktop .edit-icon-container"
            );
            for (let i = 0; i < dynamicDeleteIcons.length; i++) {
              dynamicDeleteIcons[i].addEventListener("click", function () {
                deleteModal.style.display = "block";
                document.querySelector("main").classList.add("overlay");
                const cancelBtn = document.querySelector(".cancel-btn");
                cancelBtn.addEventListener("click", function () {
                  deleteModal.style.display = "none";
                  document.querySelector("main").classList.remove("overlay");
                });
                const deleteBtn = document.querySelector(".delete-btn");
                deleteBtn.addEventListener("click", function () {
                  dynamicDeleteIcons[
                    i
                  ].parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                  deleteModal.style.display = "none";
                  document.querySelector("main").classList.remove("overlay");
                });
              });
              dynamicEditIcons[i].addEventListener("click", function () {
                let paragraph =
                  dynamicEditIcons[i].parentNode.parentNode.parentNode
                    .nextElementSibling;
                if (paragraph.tagName === "DIV") {
                  const textarea = Object.assign(
                    document.createElement("textarea"),
                    {
                      innerHTML: paragraph.innerText,
                      style: `width: 100%;
                      height: 100px;
                      resize: none;
                      font-family: "Rubik", sans-serif;
                      font-size: 1rem;
                      padding: 0.5rem 1rem 0.9rem 1rem;
                      border-radius: 10px;
                      border: 2px solid var(--lightGrey);
                      line-height: 1.5;
                      margin-bottom: 0.75rem;
                      overflow-y: hidden;`,
                    }
                  );
                  textarea.addEventListener(
                    "input",
                    function () {
                      this.style.height = "auto";
                      this.style.height = this.scrollHeight + "px";
                    },
                    false
                  );
                  textarea.addEventListener("focus", function () {
                    this.style.height = "auto";
                    this.style.height = this.scrollHeight + "px";
                    textarea.style.outline = "none";
                    textarea.style.border = "2px solid var(--moderateBlue)";
                  });
                  textarea.addEventListener("focusout", function () {
                    this.style.height = "auto";
                    this.style.height = this.scrollHeight + "px";
                    textarea.style.border = "2px solid var(--lightGrey)";
                  });
                  paragraph.replaceWith(textarea);
                  const updateBtn = document.createElement("button");
                  updateBtn.className = "update-btn";
                  updateBtn.textContent = "UPDATE";
                  updateBtn.style.display = "inline-block";
                  insertAfter(updateBtn, textarea);
                  updateBtn.parentNode.style.textAlign = "right";
                  updateBtn.addEventListener("click", function () {
                    if (textarea.value !== "") {
                      updateBtn.parentNode.style.textAlign = "left";
                      const updatedDiv = document.createElement("div");
                      updatedDiv.innerHTML = `<span class="at-the-rate-of">${
                        textarea.value.split(" ")[0]
                      }</span> `;
                      let updatedDivText = textarea.value;
                      updatedDivText = updatedDivText
                        .split(" ")
                        .slice(1)
                        .join(" ");
                      updatedDiv.innerHTML += updatedDivText;
                      updatedDiv.className = "comment-content";
                      textarea.replaceWith(updatedDiv);
                      updateBtn.remove();
                    }
                  });
                }
              });
            }
          }
          function dynamicUpvoteDesktop() {
            replyDiv.childNodes[0].childNodes[1].childNodes[3].textContent =
              parseInt(
                replyDiv.childNodes[0].childNodes[1].childNodes[3].textContent
              ) + 1;
            replyDiv.childNodes[0].childNodes[1].childNodes[5].addEventListener(
              "click",
              dynamicDownvoteDesktop
            );
            replyDiv.childNodes[0].childNodes[1].childNodes[1].removeEventListener(
              "click",
              dynamicUpvoteDesktop
            );
          }

          function dynamicDownvoteDesktop() {
            if (
              parseInt(
                replyDiv.childNodes[0].childNodes[1].childNodes[3].textContent
              ) > 0
            ) {
              replyDiv.childNodes[0].childNodes[1].childNodes[3].textContent =
                parseInt(
                  replyDiv.childNodes[0].childNodes[1].childNodes[3].textContent
                ) - 1;
              replyDiv.childNodes[0].childNodes[1].childNodes[1].addEventListener(
                "click",
                dynamicUpvoteDesktop
              );
              replyDiv.childNodes[0].childNodes[1].childNodes[5].removeEventListener(
                "click",
                dynamicDownvoteDesktop
              );
            }
          }
          replyDiv.childNodes[0].childNodes[1].childNodes[1].addEventListener(
            "click",
            dynamicUpvoteDesktop
          );
          replyDiv.childNodes[0].childNodes[1].childNodes[5].addEventListener(
            "click",
            dynamicDownvoteDesktop
          );
        });
    }
  });
}

//Textarea formatting
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener(
    "input",
    function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    },
    false
  );
}

if (
  document.querySelector(
    ".delete-and-edit-icons-container-desktop .delete-icon-container"
  )
) {
  const dynamicDeleteIcons = document.querySelectorAll(
    ".delete-and-edit-icons-container-desktop .delete-icon-container"
  );
  const dynamicEditIcons = document.querySelectorAll(
    ".delete-and-edit-icons-container-desktop .edit-icon-container"
  );
  for (let i = 0; i < dynamicDeleteIcons.length; i++) {
    dynamicDeleteIcons[i].addEventListener("click", function () {
      deleteModal.style.display = "block";
      document.querySelector("main").classList.add("overlay");
      const cancelBtn = document.querySelector(".cancel-btn");
      cancelBtn.addEventListener("click", function () {
        deleteModal.style.display = "none";
        document.querySelector("main").classList.remove("overlay");
      });
      const deleteBtn = document.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function () {
        dynamicDeleteIcons[
          i
        ].parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        deleteModal.style.display = "none";
        document.querySelector("main").classList.remove("overlay");
      });
    });
    dynamicEditIcons[i].addEventListener("click", function () {
      let paragraph =
        dynamicEditIcons[i].parentNode.parentNode.parentNode.nextElementSibling;
      if (paragraph.tagName === "DIV") {
        const textarea = Object.assign(document.createElement("textarea"), {
          innerHTML: paragraph.innerText,
          style: `width: 100%;
            height: 100px;
            resize: none;
            font-family: "Rubik", sans-serif;
            font-size: 1rem;
            padding: 0.5rem 1rem 0.9rem 1rem;
            border-radius: 10px;
            border: 2px solid var(--lightGrey);
            line-height: 1.5;
            margin-bottom: 0.75rem;
            overflow-y: hidden;`,
        });
        textarea.addEventListener(
          "input",
          function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
          },
          false
        );
        textarea.addEventListener("focus", function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
          textarea.style.outline = "none";
          textarea.style.border = "2px solid var(--moderateBlue)";
        });
        textarea.addEventListener("focusout", function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
          textarea.style.border = "2px solid var(--lightGrey)";
        });
        paragraph.replaceWith(textarea);
        const updateBtn = document.createElement("button");
        updateBtn.className = "update-btn";
        updateBtn.textContent = "UPDATE";
        updateBtn.style.display = "inline-block";
        insertAfter(updateBtn, textarea);
        updateBtn.parentNode.style.textAlign = "right";
        updateBtn.addEventListener("click", function () {
          if (textarea.value !== "") {
            updateBtn.parentNode.style.textAlign = "left";
            const updatedDiv = document.createElement("div");
            updatedDiv.innerHTML = `<span class="at-the-rate-of">${
              textarea.value.split(" ")[0]
            }</span> `;
            let updatedDivText = textarea.value;
            updatedDivText = updatedDivText.split(" ").slice(1).join(" ");
            updatedDiv.innerHTML += updatedDivText;
            updatedDiv.className = "comment-content";
            textarea.replaceWith(updatedDiv);
            updateBtn.remove();
          }
        });
      }
    });
  }
}

if (
  document.querySelector(
    ".delete-and-edit-icons-container .delete-icon-container"
  )
) {
  const dynamicDeleteIcons2 = document.querySelectorAll(
    ".delete-and-edit-icons-container .delete-icon-container"
  );
  const dynamicEditIcons2 = document.querySelectorAll(
    ".delete-and-edit-icons-container .edit-icon-container"
  );
  for (let i = 0; i < dynamicDeleteIcons2.length; i++) {
    dynamicDeleteIcons2[i].addEventListener("click", function () {
      deleteModal.style.display = "block";
      document.querySelector("main").classList.add("overlay");
      const cancelBtn = document.querySelector(".cancel-btn");
      cancelBtn.addEventListener("click", function () {
        deleteModal.style.display = "none";
        document.querySelector("main").classList.remove("overlay");
      });
      const deleteBtn = document.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function () {
        dynamicDeleteIcons2[
          i
        ].parentNode.parentNode.parentNode.parentNode.remove();
        deleteModal.style.display = "none";
        document.querySelector("main").classList.remove("overlay");
      });
    });
    dynamicEditIcons2[i].addEventListener("click", function () {
      let paragraph =
        dynamicEditIcons2[i].parentNode.parentNode.previousElementSibling;
      if (paragraph.tagName === "DIV") {
        const textarea = Object.assign(document.createElement("textarea"), {
          innerHTML: paragraph.innerText,
          style: `width: 100%;
            height: 100px;
            resize: none;
            font-family: "Rubik", sans-serif;
            font-size: 1rem;
            padding: 0.5rem 1rem 0.9rem 1rem;
            border-radius: 10px;
            border: 2px solid var(--lightGrey);
            line-height: 1.5;
            margin-bottom: 0.75rem;
            overflow-y: hidden;`,
        });
        textarea.addEventListener(
          "input",
          function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
          },
          false
        );
        textarea.addEventListener("focus", function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
          textarea.style.outline = "none";
          textarea.style.border = "2px solid var(--moderateBlue)";
        });
        textarea.addEventListener("focusout", function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
          textarea.style.border = "2px solid var(--lightGrey)";
        });
        paragraph.replaceWith(textarea);
        const updateBtn = document.createElement("button");

        updateBtn.className = "update-btn";
        updateBtn.textContent = "UPDATE";
        updateBtn.style.marginBottom = "0.75rem";
        updateBtn.style.display = "inline-block";
        insertAfter(updateBtn, textarea);
        updateBtn.parentNode.style.textAlign = "right";
        updateBtn.addEventListener("click", function () {
          if (textarea.value !== "") {
            updateBtn.parentNode.style.textAlign = "left";
            const updatedDiv = document.createElement("div");
            updatedDiv.innerHTML = `<span class="at-the-rate-of">${
              textarea.value.split(" ")[0]
            }</span> `;
            let updatedDivText = textarea.value;
            updatedDivText = updatedDivText.split(" ").slice(1).join(" ");
            updatedDiv.innerHTML += updatedDivText;
            updatedDiv.className = "comment-content";
            textarea.replaceWith(updatedDiv);
            updateBtn.remove();
          }
        });
      }
    });
  }
}

sendBtn.addEventListener("click", function () {
  if (sendBtn.parentNode.previousElementSibling.value !== "") {
    const newCommentDiv = document.createElement("div");
    newCommentDiv.className = "comment-container";
    newCommentDiv.style.transform = "translateX(0px)";
    const textareaContent = sendBtn.parentNode.previousElementSibling.value;
    newCommentDiv.innerHTML += `<div class="comment-container-part-1">
    <div class="vote-container-desktop">
      <div class="plus-icon"></div>
      <div class="votes">0</div>
      <div class="minus-icon"></div>
    </div>
  </div>
  <div class="comment-container-part-2">
    <div class="comment-header">
      <div class="comment-header-part-1">
        <div class="avatar-julius-omo"></div>
        <div class="username">juliusomo</div>
        <div class="you">you</div>
        <div class="time-posted">Just now</div>
      </div>
      <div class="comment-header-part-2">
        <div class="delete-and-edit-icons-container-desktop">
          <div class="delete-icon-container">
            <div class="delete-icon"></div>
            <div class="delete-text">Delete</div>
          </div>
          <div class="edit-icon-container">
            <div class="edit-icon"></div>
            <div class="edit-text">Edit</div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-content">
      ${textareaContent}
    </div>
    <div class="vote-and-icons-container">
      <div class="vote-container">
        <div class="plus-icon"></div>
        <div class="votes">0</div>
        <div class="minus-icon"></div>
      </div>
      <div class="delete-and-edit-icons-container">
        <div class="delete-icon-container">
          <div class="delete-icon"></div>
          <div class="delete-text">Delete</div>
        </div>
        <div class="edit-icon-container">
          <div class="edit-icon"></div>
          <div class="edit-text">Edit</div>
        </div>
      </div>
    </div>
  </div>`;
    function dynamicUpvoteMobile() {
      newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[3].textContent =
        parseInt(
          newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[3]
            .textContent
        ) + 1;
      newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[5].addEventListener(
        "click",
        dynamicDownvoteMobile
      );
      newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[1].removeEventListener(
        "click",
        dynamicUpvoteMobile
      );
    }

    function dynamicDownvoteMobile() {
      if (
        parseInt(
          newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[3]
            .textContent
        ) > 0
      ) {
        newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[3].textContent =
          parseInt(
            newCommentDiv.childNodes[2].childNodes[5].childNodes[1]
              .childNodes[3].textContent
          ) - 1;
        newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[1].addEventListener(
          "click",
          dynamicUpvoteMobile
        );
        newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[5].removeEventListener(
          "click",
          dynamicDownvoteMobile
        );
      }
    }

    function dynamicUpvoteDesktop() {
      newCommentDiv.childNodes[0].childNodes[1].childNodes[3].textContent =
        parseInt(
          newCommentDiv.childNodes[0].childNodes[1].childNodes[3].textContent
        ) + 1;
      newCommentDiv.childNodes[0].childNodes[1].childNodes[5].addEventListener(
        "click",
        dynamicDownvoteDesktop
      );
      newCommentDiv.childNodes[0].childNodes[1].childNodes[1].removeEventListener(
        "click",
        dynamicUpvoteDesktop
      );
    }

    function dynamicDownvoteDesktop() {
      if (
        parseInt(
          newCommentDiv.childNodes[0].childNodes[1].childNodes[3].textContent
        ) > 0
      ) {
        newCommentDiv.childNodes[0].childNodes[1].childNodes[3].textContent =
          parseInt(
            newCommentDiv.childNodes[0].childNodes[1].childNodes[3].textContent
          ) - 1;
        newCommentDiv.childNodes[0].childNodes[1].childNodes[1].addEventListener(
          "click",
          dynamicUpvoteDesktop
        );
        newCommentDiv.childNodes[0].childNodes[1].childNodes[5].removeEventListener(
          "click",
          dynamicDownvoteDesktop
        );
      }
    }
    newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[1].addEventListener(
      "click",
      dynamicUpvoteMobile
    );
    newCommentDiv.childNodes[2].childNodes[5].childNodes[1].childNodes[5].addEventListener(
      "click",
      dynamicDownvoteMobile
    );

    newCommentDiv.childNodes[0].childNodes[1].childNodes[1].addEventListener(
      "click",
      dynamicUpvoteDesktop
    );
    newCommentDiv.childNodes[0].childNodes[1].childNodes[5].addEventListener(
      "click",
      dynamicDownvoteDesktop
    );
    document
      .querySelector("main")
      .insertBefore(
        newCommentDiv,
        document.querySelector(".add-a-comment-container")
      );
    sendBtn.parentNode.previousElementSibling.value = "";
  }

  if (
    document.querySelector(
      ".delete-and-edit-icons-container-desktop .delete-icon-container"
    )
  ) {
    const dynamicDeleteIcons = document.querySelectorAll(
      ".delete-and-edit-icons-container-desktop .delete-icon-container"
    );
    const dynamicEditIcons = document.querySelectorAll(
      ".delete-and-edit-icons-container-desktop .edit-icon-container"
    );

    for (let i = 0; i < dynamicDeleteIcons.length; i++) {
      dynamicDeleteIcons[i].addEventListener("click", function () {
        deleteModal.style.display = "block";
        document.querySelector("main").classList.add("overlay");
        const cancelBtn = document.querySelector(".cancel-btn");
        cancelBtn.addEventListener("click", function () {
          deleteModal.style.display = "none";
          document.querySelector("main").classList.remove("overlay");
        });
        const deleteBtn = document.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
          dynamicDeleteIcons[
            i
          ].parentNode.parentNode.parentNode.parentNode.parentNode.remove();
          deleteModal.style.display = "none";
          document.querySelector("main").classList.remove("overlay");
        });
      });
      dynamicEditIcons[i].addEventListener("click", function () {
        let paragraph =
          dynamicEditIcons[i].parentNode.parentNode.parentNode
            .nextElementSibling;
        if (paragraph.tagName === "DIV") {
          const textarea = Object.assign(document.createElement("textarea"), {
            innerHTML: paragraph.innerText,
            style: `width: 100%;
              height: 100px;
              resize: none;
              font-family: "Rubik", sans-serif;
              font-size: 1rem;
              padding: 0.5rem 1rem 0.9rem 1rem;
              border-radius: 10px;
              border: 2px solid var(--lightGrey);
              line-height: 1.5;
              margin-bottom: 0.75rem;
              overflow-y: hidden;`,
          });
          textarea.addEventListener(
            "input",
            function () {
              this.style.height = "auto";
              this.style.height = this.scrollHeight + "px";
            },
            false
          );
          textarea.addEventListener("focus", function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
            textarea.style.outline = "none";
            textarea.style.border = "2px solid var(--moderateBlue)";
          });
          textarea.addEventListener("focusout", function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
            textarea.style.border = "2px solid var(--lightGrey)";
          });
          paragraph.replaceWith(textarea);
          const updateBtn = document.createElement("button");
          updateBtn.className = "update-btn";
          updateBtn.textContent = "UPDATE";
          updateBtn.style.display = "inline-block";
          insertAfter(updateBtn, textarea);
          updateBtn.parentNode.style.textAlign = "right";
          updateBtn.addEventListener("click", function () {
            if (textarea.value !== "") {
              updateBtn.parentNode.style.textAlign = "left";
              const updatedDiv = document.createElement("div");
              let updatedDivText = textarea.value;
              updatedDiv.innerHTML = updatedDivText;
              updatedDiv.className = "comment-content";
              textarea.replaceWith(updatedDiv);
              updateBtn.remove();
            }
          });
        }
      });
    }
  }

  if (
    document.querySelector(
      ".delete-and-edit-icons-container .delete-icon-container"
    )
  ) {
    const dynamicDeleteIcons = document.querySelectorAll(
      ".delete-and-edit-icons-container .delete-icon-container"
    );
    const dynamicEditIcons = document.querySelectorAll(
      ".delete-and-edit-icons-container .edit-icon-container"
    );
    for (let i = 0; i < dynamicDeleteIcons.length; i++) {
      dynamicDeleteIcons[i].addEventListener("click", function () {
        deleteModal.style.display = "block";
        document.querySelector("main").classList.add("overlay");
        const cancelBtn = document.querySelector(".cancel-btn");
        cancelBtn.addEventListener("click", function () {
          deleteModal.style.display = "none";
          document.querySelector("main").classList.remove("overlay");
        });
        const deleteBtn = document.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
          dynamicDeleteIcons[
            i
          ].parentNode.parentNode.parentNode.parentNode.remove();
          deleteModal.style.display = "none";
          document.querySelector("main").classList.remove("overlay");
        });
      });
      dynamicEditIcons[i].addEventListener("click", function () {
        let paragraph =
          dynamicEditIcons[i].parentNode.parentNode.previousElementSibling;
        if (paragraph.tagName === "DIV") {
          const textarea = Object.assign(document.createElement("textarea"), {
            innerHTML: paragraph.innerText,
            style: `width: 100%;
              height: 100px;
              resize: none;
              font-family: "Rubik", sans-serif;
              font-size: 1rem;
              padding: 0.5rem 1rem 0.9rem 1rem;
              border-radius: 10px;
              border: 2px solid var(--lightGrey);
              line-height: 1.5;
              margin-bottom: 0.75rem;
              overflow-y: hidden;`,
          });
          textarea.addEventListener(
            "input",
            function () {
              this.style.height = "auto";
              this.style.height = this.scrollHeight + "px";
            },
            false
          );
          textarea.addEventListener("focus", function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
            textarea.style.outline = "none";
            textarea.style.border = "2px solid var(--moderateBlue)";
          });
          textarea.addEventListener("focusout", function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
            textarea.style.border = "2px solid var(--lightGrey)";
          });
          paragraph.replaceWith(textarea);
          const updateBtn = document.createElement("button");

          updateBtn.className = "update-btn";
          updateBtn.textContent = "UPDATE";
          updateBtn.style.marginBottom = "0.75rem";
          updateBtn.style.display = "inline-block";
          insertAfter(updateBtn, textarea);
          updateBtn.parentNode.style.textAlign = "right";
          updateBtn.addEventListener("click", function () {
            if (textarea.value !== "") {
              updateBtn.parentNode.style.textAlign = "left";
              const updatedDiv = document.createElement("div");
              let updatedDivText = textarea.value;
              updatedDiv.innerHTML = updatedDivText;
              updatedDiv.className = "comment-content";
              textarea.replaceWith(updatedDiv);
              updateBtn.remove();
            }
          });
        }
      });
    }
  }
});

for (let i = 0; i < plusIcons.length; i++) {
  function upvote() {
    plusIcons[i].nextElementSibling.textContent =
      parseInt(plusIcons[i].nextElementSibling.textContent) + 1;
    minusIcons[i].addEventListener("click", downvote);
    plusIcons[i].removeEventListener("click", upvote);
  }

  function downvote() {
    minusIcons[i].previousElementSibling.textContent =
      parseInt(minusIcons[i].previousElementSibling.textContent) - 1;
    plusIcons[i].addEventListener("click", upvote);
    minusIcons[i].removeEventListener("click", downvote);
  }
  plusIcons[i].addEventListener("click", upvote);
  minusIcons[i].addEventListener("click", downvote);
}
