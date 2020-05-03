Rails.application.routes.draw do
  devise_for(
    :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout'
    },
    controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }
  )

  root 'articles#index'
  resources :articles, only: %w(index show)

  namespace :home do
    root 'articles#index'
    resources :articles
  end

  resources :pages, param: :username, only: %w(index show)

  # namespace :homes, path: :home, as: :home do
  #   root to: redirect('/user/articles')
  # end

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
