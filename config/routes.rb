Rails.application.routes.draw do
  root 'articles#index'

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

  resources :articles, only: %w(index show)
  namespace :user_page, path: :user, as: :user do
    root 'articles#index'
    resources :articles
  end

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
