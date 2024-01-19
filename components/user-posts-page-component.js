import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage } from "../index.js";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

export function renderUserPostsPageComponent({ appEl }) {
    const appHtml = posts.map((post) => {
      const postDateBefore = formatDistanceToNow(new Date(post.createdAt), {
        locale: ru,
      });
      return ` 
                <div class="page-container">
                  <div class="header-container"></div>
                  <ul class="posts">
                    <li class="post">
                      <div class="post-header" data-user-id="${post.user.id}">
                          <img src="${post.user.imageUrl}" class="post-header__user-image">
                          <p class="post-header__user-name">${post.user.name}</p>
                      </div>
                      <div class="post-image-container">
                        <img class="post-image" src="${post.imageUrl}">
                      </div>
                      <div class="post-likes">
                        <button data-post-id="${post.id}" class="like-button">
                          <img src="./assets/images/like-active.svg">
                        </button>
                        <p class="post-likes-text">
                          Нравится: <strong>2</strong>
                        </p>
                      </div>
                      <p class="post-text">
                        <span class="user-name">${post.user.name}</span>
                        ${post.description}
                      </p>
                      <p class="post-date">
                      ${postDateBefore} назад
                      </p>
                    </li>
                    </ul>
                </div>`;
    });

    appEl.innerHTML = appHtml;

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });
}